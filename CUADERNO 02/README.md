# TF01 — Terraform + AWS Academy — solución de referencia para prueba del corrector

**Alumno:** Solución de referencia automatizada  
**ID:** TF01  
**Cuaderno:** Terraform + AWS Academy — 20 ejercicios  
**Propósito:** repositorio de prueba para el corrector automático GitHub + Apps Script + OpenAI.

> Importante: el código, la estructura, las explicaciones y las decisiones de seguridad están resueltos. No se han inventado ejecuciones de AWS/Terraform. Cuando una salida exigiría credenciales de AWS Academy o haber ejecutado `apply`, `plan`, `import` o `destroy`, la evidencia se marca `NO_VERIFICABLE`. Esto permite probar también el contrato de la rúbrica para evidencias no verificables.

| Nº | Ejercicio | Estado | Carpeta |
|---:|---|---|---|
| 00 | Configurar AWS Academy, AWS CLI y Terraform | PARCIAL | [E00-configuracion](./E00-configuracion/) |
| 01 | Crear tu primera EC2 con Terraform | PARCIAL | [E01-ec2](./E01-ec2/) |
| 02 | Crear tu primer bucket S3 con Terraform | PARCIAL | [E02-s3](./E02-s3/) |
| 03 | Entender y crear una VPC | PARCIAL | [E03-vpc](./E03-vpc/) |
| 04 | Dividir una VPC en dos subredes | PARCIAL | [E04-subnets](./E04-subnets/) |
| 05 | Proteger recursos con Security Groups | PARCIAL | [E05-security-group](./E05-security-group/) |
| 06 | Conectar una subnet a Internet | PARCIAL | [E06-routing](./E06-routing/) |
| 07 | Crear una EC2 dentro de nuestra subnet | PARCIAL | [E07-ec2-subnet](./E07-ec2-subnet/) |
| 08 | Cuando main.tf empieza a crecer | PARCIAL | [E08-organizacion](./E08-organizacion/) |
| 09 | Introducir variables en Terraform | PARCIAL | [E09-variables](./E09-variables/) |
| 10 | Reutilizar código con tfvars y entornos | PARCIAL | [E10-tfvars](./E10-tfvars/) |
| 11 | Mostrar resultados con outputs | PARCIAL | [E11-outputs](./E11-outputs/) |
| 12 | Consultar AWS con data sources | PARCIAL | [E12-data-sources](./E12-data-sources/) |
| 13 | Entender las dependencias de Terraform | PARCIAL | [E13-dependencias](./E13-dependencias/) |
| 14 | Modificar infraestructura y leer terraform plan | PARCIAL | [E14-cambios](./E14-cambios/) |
| 15 | Detectar drift entre Terraform y AWS | PARCIAL | [E15-drift](./E15-drift/) |
| 16 | Importar infraestructura existente | PARCIAL | [E16-import](./E16-import/) |
| 17 | Crear varios recursos con count | PARCIAL | [E17-count](./E17-count/) |
| 18 | Crear recursos identificados con for_each | PARCIAL | [E18-for-each](./E18-for-each/) |
| 19 | Proyecto integrador Terraform | PARCIAL | [E19-proyecto-integrador](./E19-proyecto-integrador/) |

## Seguridad
No hay credenciales reales, tokens, secretos, `.terraform/`, `tfstate` ni `tfplan` versionados.

## Incidencias
No se dispone de una sesión AWS Academy dentro de este proceso de generación, por lo que las evidencias de ejecución se documentan de forma explícita como `NO_VERIFICABLE`.
