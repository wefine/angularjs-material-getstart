#!/usr/bin/env bash

if [ $# != 1 ]; then
    echo "Need only one parameter which used for registry!"
    exit 1
fi

registry=$1
image="wefine-material:getstart"

docker tag ${image} ${registry}/${image}
docker push ${registry}/${image}
docker rmi ${registry}/${image}

exit 0