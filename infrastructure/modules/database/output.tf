output "ssh_command" {
  value = "ssh -o ProxyCommand='ssh -W %h:%p -q ${var.bastion_ip}'  -i ~/.ssh/id_rsa usaamahahmed@${google_compute_address.internal_ip["a"].address}"
}