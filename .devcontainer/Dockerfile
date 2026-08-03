# Use Microsoft devcontainer image with Node 18 preinstalled
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-18

# Set workspace and default user
WORKDIR /workspace
ARG USERNAME=node
ENV HOME=/home/${USERNAME}
USER ${USERNAME}

# Container will be used by VS Code; dev server is started from the workspace (postCreateCommand)
EXPOSE 3000
