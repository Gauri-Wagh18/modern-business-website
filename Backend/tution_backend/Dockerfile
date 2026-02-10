# Use Java runtime
FROM eclipse-temurin:17-jre

# Set working directory inside container
WORKDIR /app

# Copy jar from target folder
COPY target/tution_backend-0.0.1-SNAPSHOT.jar app.jar

# Expose Spring Boot port
EXPOSE 8080

# Run Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
