param(
  [Parameter(Position = 0)]
  [string]$Message = "Update documentation"
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

$git = Get-Command git -ErrorAction SilentlyContinue
if ($git) {
  $gitCommand = $git.Source
} else {
  $portableGitCandidates = @(
    (Join-Path $projectRoot ".tools\portable-git\cmd\git.exe"),
    (Join-Path $projectRoot ".tools\mingit\cmd\git.exe")
  )
  $portableGit = $portableGitCandidates |
    Where-Object { Test-Path -LiteralPath $_ } |
    Select-Object -First 1

  if ($portableGit) {
    $gitCommand = $portableGit
  } else {
    $githubDesktopGit = Get-ChildItem `
      -Path (Join-Path $env:LOCALAPPDATA "GitHubDesktop\app-*\resources\app\git\cmd\git.exe") `
      -ErrorAction SilentlyContinue |
      Sort-Object FullName -Descending |
      Select-Object -First 1

    if (-not $githubDesktopGit) {
      throw "Git was not found. Install Git for Windows or GitHub Desktop."
    }
    $gitCommand = $githubDesktopGit.FullName
  }
}

$alternateGitDir = Join-Path $projectRoot ".tools\git-history"
$previousErrorActionPreference = $ErrorActionPreference
$ErrorActionPreference = "Continue"
& $gitCommand rev-parse --verify HEAD 2>$null | Out-Null
$standardRepositoryReady = $LASTEXITCODE -eq 0
$ErrorActionPreference = $previousErrorActionPreference

if (-not $standardRepositoryReady -and (Test-Path -LiteralPath $alternateGitDir)) {
  $env:GIT_DIR = $alternateGitDir
  $env:GIT_WORK_TREE = $projectRoot
}

$env:npm_config_cache = Join-Path $projectRoot ".npm-cache"

Write-Host "Installing exact dependencies..."
& npm.cmd ci
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Building documentation..."
& npm.cmd run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Preparing Git commit..."
& $gitCommand add --all
& $gitCommand diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "There are no documentation changes to publish."
  exit 0
}

& $gitCommand commit -m $Message
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Synchronizing with GitHub..."
& $gitCommand pull --rebase origin main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Publishing to GitHub..."
& $gitCommand push origin main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Published. Cloudflare Pages will start a new deployment automatically."
