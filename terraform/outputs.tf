output "alb_dns_name" {
  description = "DNS name of the Application Load Balancer"
  value       = aws_lb.cibc_portfolio_tracker.dns_name
}

output "cluster_name" {
  description = "Name of the ECS cluster"
  value       = aws_ecs_cluster.cibc_portfolio_tracker.name
}

output "service_name" {
  description = "Name of the ECS service"
  value       = aws_ecs_service.cibc_portfolio_tracker.name
}
