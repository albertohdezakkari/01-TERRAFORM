# Evidencia — Crear una EC2 dentro de nuestra subnet

## Qué he construido o analizado
EC2 t2.micro enlazada a una subnet y a un Security Group mediante referencias; la AMI se consulta con data source.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
Las referencias se verifican en código; la creación real es NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Referencias: `aws_vpc.vpc_aula.id`, `aws_subnet.publica.id`, `aws_security_group.web.id` y `data.aws_ami.amazon_linux.id`. Esas referencias crean dependencias implícitas en el grafo. `data` consulta; `resource` gestiona. La EC2 se ubica en la subnet y usa el SG asociado a la misma VPC.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.
