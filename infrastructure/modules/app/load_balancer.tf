# # forwarding rule
# resource "google_compute_forwarding_rule" "default" {
#   name                  = "l7-ilb-forwarding-rule"
#   ip_protocol           = "TCP"
#   load_balancing_scheme = "INTERNAL_MANAGED"
#   port_range            = "80"
#   target                = google_compute_region_target_http_proxy.default.id
#   network_tier          = "PREMIUM"
#   network               = var.mainvpc
#   subnetwork            = var.network_private
# }

# # HTTP target proxy
# resource "google_compute_region_target_http_proxy" "default" {
#   name     = "l7-ilb-target-http-proxy"
#   url_map  = google_compute_region_url_map.default.id
# }

# # URL map
# resource "google_compute_region_url_map" "default" {
#   name            = "l7-ilb-url-map"
  
#   default_service = google_compute_region_backend_service.default.id
# }

# # backend service
# resource "google_compute_region_backend_service" "default" {
    
#   name                  = "l7-ilb-backend-subnet"
#   protocol              = "HTTP"
#   load_balancing_scheme = "INTERNAL_MANAGED"
#   timeout_sec           = 10
#   health_checks         = [google_compute_region_health_check.default.id]
#   backend {
#     group           = google_compute_region_instance_group_manager.app_instance_group_manager.instance_group
#     balancing_mode  = "UTILIZATION"
#     capacity_scaler = 1.0
#   }
# }