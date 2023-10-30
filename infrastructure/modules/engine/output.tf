# output "internal_load_balancer_ip" {
#   value = (length(data.google_compute_forwarding_rule.grab_lb_ip[0].ip_address) == 0) ? "Empty IP" : google_compute_forwarding_rule.default[0].ip_address
# }
# data  "google_compute_region_instance_group" "mig_data"{
#   count = (var.engine_type == "api")  ? 1 : 0
#   name = google_compute_region_instance_group_manager.engine_instance_group_manager[0].name
# }

# #Get each instance data 
# data "google_compute_instance" "intance_data" {
#   depends_on = [ google_compute_region_instance_group_manager.engine_instance_group_manage  ]
#   self_link = data.google_compute_region_instance_group.mig_data[0].instances[0]
# }

# #Print the data needed
# output "web_ssh_command" {
#   value = [
#     for instance in data.google_compute_instance.intance_data: 
#     [
#       "web: ssh -o ProxyCommand='ssh -W %h:%p -q ${var.bastion_ip}'  -i ~/.ssh/id_rsa usaamahahmed@${instance.network_interface.0.network_ip}"
#     ]
#   ]
# }