# 00 — Configuración AWS Academy

## Objetivo
Comprobar AWS CLI, Terraform y las credenciales temporales de AWS Academy.

### Git Bash
```bash
export AWS_ACCESS_KEY_ID="TU_ACCESS_KEY"
export AWS_SECRET_ACCESS_KEY="TU_SECRET_ACCESS_KEY"
export AWS_SESSION_TOKEN="TU_SESSION_TOKEN"
export AWS_DEFAULT_REGION="us-east-1"
```

### PowerShell
```powershell
$env:AWS_ACCESS_KEY_ID="TU_ACCESS_KEY"
$env:AWS_SECRET_ACCESS_KEY="TU_SECRET_ACCESS_KEY"
$env:AWS_SESSION_TOKEN="TU_SESSION_TOKEN"
$env:AWS_DEFAULT_REGION="us-east-1"
```

## Comprobaciones
```bash
aws --version
terraform version
aws sts get-caller-identity --region us-east-1
terraform init
terraform validate
```

No guardes credenciales reales en `main.tf` ni en GitHub.
