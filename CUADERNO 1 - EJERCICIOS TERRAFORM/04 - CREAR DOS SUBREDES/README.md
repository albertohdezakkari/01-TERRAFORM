# 04 — Crear dos subredes

```text
VPC 10.10.0.0/16
├── Subnet A 10.10.1.0/24
└── Subnet B 10.10.2.0/24
```

`/24` deja 8 bits para direcciones: `32 - 24 = 8`, por tanto `2^8 = 256` direcciones totales.

La referencia:

```hcl
vpc_id = aws_vpc.vpc_aula.id
```

hace que Terraform conozca la dependencia entre las subnets y la VPC.

## Ejecución
```bash
terraform init
terraform validate
terraform plan
terraform apply
```

El plan debe mostrar 3 recursos nuevos: 1 VPC y 2 subnets.

## Limpieza
```bash
terraform destroy
```
