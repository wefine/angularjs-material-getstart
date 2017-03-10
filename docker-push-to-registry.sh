#!/usr/bin/env bash

if [ $# != 1 ]; then
    echo "Need only one parameter which used for registry!"
    exit 1
fi

registry=$1
image="wefine-material:getstart"

docker tag ${image} ${registry}/library/${image}
docker push ${registry}/library/${image}
docker rmi ${registry}/library/${image}

exit 0