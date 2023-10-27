variable "network_private" {
  type = string
}

variable "default_bucket" {
  type = string
}


variable "admin_user" {
  type = string
}


variable "env" {
  type = string
}

variable "env_owner" {
  type = string
}

variable "service_account" {
  type = string
}

variable "bastion_ip" {
  type = string
}


variable "max_nodes" {
  type = number 
}

variable "min_nodes" {
  type = number
}

variable "rgn" {
  type = string
}

variable "instance_name" {
  type = string
}

variable "mig_name" {
  type = string
}

variable "engine_type" {
  type = string
}

variable "named_port" {
  type = string
}

variable "interal_lb_address" {
  type = string
}
