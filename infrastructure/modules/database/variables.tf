variable "network_private" {
  type = string
}

variable "default_bucket" {
  type = string
}

variable "replicaset_name" {
  type = string
}

variable "pid_file_path" {
  type = string
}

variable "db_datafiles_path" {
  type = string
}

variable "db_logfile_path" {
  type = string
}

variable "admin_user" {
  type = string
}

variable "replicaset_status" {
  type = bool
}

variable "default_port" {
  type = string
}

variable "env" {
  type = string
}

variable "env_owner" {
  type = string
}

variable "rgn" {
  type = string
}

variable "service_account" {
  type = string
}

variable "bastion_ip" {
  type = string
}