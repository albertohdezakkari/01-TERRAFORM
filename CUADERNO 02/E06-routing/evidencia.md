# Evidencia — Conectar una subnet a Internet

## Qué he construido o analizado
Cadena de routing VPC → subnet pública → route table → ruta 0.0.0.0/0 → Internet Gateway.

## Qué comandos he ejecutado realmente
`terraform plan` no se ha ejecutado; NO_VERIFICABLE.

## Qué resultado he obtenido
El código contiene todos los componentes de routing exigidos.

## Incidencias
No se ha utilizado una sesión real de AWS Academy durante la generación de esta solución de referencia.

## Qué puedo explicar de este ejercicio
Un Internet Gateway conecta la VPC con Internet. La tabla de rutas decide hacia dónde enviar tráfico. `0.0.0.0/0` es la ruta por defecto IPv4. Una subnet se considera pública cuando su tabla asociada tiene una ruta al IGW y las instancias pueden disponer de IP pública. El routing crea camino; un Security Group filtra tráfico.

## Seguridad
No se han incluido credenciales, secretos, archivos `.tfstate`, planes binarios ni la carpeta `.terraform/`.
