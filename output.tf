# output "api_template_output" {
#   value = module.api_engine_config.template_check
# }

output "connection_command" {
  value = module.database_config.ssh_command
}
