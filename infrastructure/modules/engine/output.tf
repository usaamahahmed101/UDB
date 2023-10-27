# output "internal_load_balancer_ip" {
#   value = (length(data.google_compute_forwarding_rule.grab_lb_ip[0].ip_address) == 0) ? "Empty IP" : google_compute_forwarding_rule.default[0].ip_address
# }