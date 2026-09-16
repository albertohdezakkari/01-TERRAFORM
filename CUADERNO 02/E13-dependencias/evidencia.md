# Evidencia — Entender las dependencias de Terraform

## Qué he construido o analizado
VPC y subnet enlazadas por una referencia directa.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
La expresión que crea la dependencia es `vpc_id = aws_vpc.vpc_aula.id`.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Terraform construye un grafo de dependencias a partir de referencias. La dependencia aquí es implícita y no requiere `depends_on`. `depends_on` se reserva para dependencias reales que Terraform no puede inferir por referencias de datos.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.
