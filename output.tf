output "connection_command" {
  value = module.database_config.ssh_command
}

output "interal_lb_address" {
  value = module.network_config.internal_lb_ip
}
