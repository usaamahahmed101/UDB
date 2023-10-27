resource "google_compute_forwarding_rule" "default" {
    count = (var.engine_type == "api")  ? 1 : 0
    name = "lb-frontend"
    ip_protocol = "TCP"
    load_balancing_scheme = "INTERNAL"
    ports = [5000]
    allow_global_access = true
    backend_service = google_compute_region_backend_service.api_backend_service[0].id
    subnetwork = var.network_private
    ip_address = var.interal_lb_address

}



resource "google_compute_region_backend_service" "api_backend_service" {
  count = (var.engine_type == "api") ? 1 : 0
  name                     = "l7-lb-backend-service"
  protocol                 = "TCP"
  load_balancing_scheme    = "INTERNAL"
  timeout_sec              = 10
  health_checks            = [google_compute_region_health_check.default[0].id]
  backend {
    group           = google_compute_region_instance_group_manager.engine_instance_group_manager[0].instance_group
    balancing_mode  = "CONNECTION"
  }
}