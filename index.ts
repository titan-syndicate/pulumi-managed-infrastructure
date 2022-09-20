import * as linode from "@pulumi/linode";

// Create a Linode resource (Linode Instance)
// const instance = new linode.Instance("my-instance", {
//     type: "g6-nanode-1",
//     region: "us-east",
//     image: "linode/ubuntu18.04",
// });

// Export the Instance label of the instance
// export const instanceLabel = instance.label;

function createLinodeInstance(label: string = 'my-instance', type: string = 'g6-nanode-1', region: string = 'us-east', image: string = 'linode/ubuntu18.04') {
    return new linode.Instance(label, {
        type: type,
        region: region,
        image: image,
    });
}

export { createLinodeInstance };