# Install minikube on local machine
    sudo install minikube-linux-amd64 /usr/local/bin/minikube
    sudo install minikube-linux-amd64 /usr/local/bin/minikube

    # Check installation
    minikube version

    # Start minikube
    minikube start --driver=docker


# Describe pods, replica-sets
    kubectl describe pods
    kubectl describe replicasets
# Get pods/replica-sets details
    kubectl get pods -o wide
    kubectl get rs -o wide
# Delete pod/replica-sets
    kubectl delete pod POD-NAME
    kubectl delete rs REPLICASET-NAME

    ## pods created having tier frontend
    kubectl delete pods -l tier=frontend

# Create replicaset from file
    kubectl create -f /root/replicaset-definition.yaml

    file: replicaset-definition.yaml
    -------------------------------------
    apiVersion: apps/v1
    kind: ReplicaSet
    metadata:
    name: replicaset-1
    spec:
        replicas: 2
        selector:
            matchLabels:
            tier: frontend
        template:
            metadata:
            labels:
                tier: frontend
            spec:
            containers:
            - name: nginx
            image: nginx
            command: echo "1"  # this overrides docker ENTRYPOINT
            args: [1]  # this overrides docker CMD
    -------------------------------------

# Update replicaset/deployment by updating file first then applying changes
    kubectl apply -f /root/replicaset-definition.yaml
