# Install minikube on local machine
    sudo install minikube-linux-amd64 /usr/local/bin/minikube
    sudo install minikube-linux-amd64 /usr/local/bin/minikube

    # Check installation
    minikube version

    # Start minikube
    minikube start --driver=docker

# Switch from aws to minikube
kubectl config get-contexts
kubectl config use-context minikube
kubectl config use-context xXXXx

# Describe pods, replica-sets
    kubectl describe pods
    kubectl describe replicasets
# Get pods/replica-sets details
    kubectl get pods
    kubectl get pods -n testing
    kubectl get pods -o wide
    kubectl get rs -o wide
    kubectl -n prod get pods -l LABEL=VALUE --tail=-1 | grep "KEY_WORD"

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

# Export pod to yaml file
    kubectl get pod POD-NAME -o yaml > pod.yaml


### Configmaps
-------------------------------------
# Create a new config map named my-config based on folder bar
kubectl create configmap my-config --from-file=path/to/bar

# Create a new config map named my-config with key1=config1 and key2=config2
kubectl create configmap my-config --from-literal=key1=config1 --from-literal=key2=config2

# Create a new config map named my-config from an env file
kubectl create configmap my-config --from-env-file=path/to/foo.env --from-env-file=path/to/bar.env
-------------------------------------