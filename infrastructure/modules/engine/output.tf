output "template_check" {
  value = templatefile("${path.module}/templates/api-engine.sh.tftpl", {})
}