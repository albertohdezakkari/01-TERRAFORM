# Evidencia — Crear tu primera EC2 con Terraform

## Qué he construido o analizado
Una instancia EC2 `t2.micro` basada en una AMI reciente de Amazon Linux 2023 localizada con `data aws_ami`.

## Qué comandos he ejecutado realmente
No se han ejecutado `plan`, `apply` ni `destroy`; se marcan NO_VERIFICABLE.

## Qué resultado he obtenido
El código permite verificar el `data` y el `resource`; la creación real de la EC2 es NO_VERIFICABLE.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
`data` consulta infraestructura o información existente; `resource` crea o gestiona infraestructura. Una AMI es la imagen base y `instance_type` define capacidad. `plan` previsualiza, `apply` aplica y `destroy` elimina recursos gestionados.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.
