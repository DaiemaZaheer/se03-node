const RosApi = require("node-routeros").RouterOSAPI;

let id;

const addMikrotikApiUser = async (server, client) => {
    const conn = new RosApi({
        host: server.ip,
        user: server.name,
        password: server.password,
    });

    conn.connect().then(() => {
        console.log("connected")
        conn.write('/ppp/secret/add', [
            '=name='+client.name,
            '=password='+client.password,
            '=service=pppoe',
            '=profile='+client.profile,
        ]).then((data) => {
            console.log("added: ")
            console.log(data)
            id = data.ref;
            return {id: data};
        }).catch((error) => {
            console.log("added: " + error)
            return {error: error};
        })
    }).catch((error) => {
        console.log("added: " + error)
        return {error: error};
    });

    // try {
    //     await conn.connect()
    //     let data = await conn.write('/ppp/secret/add', ['=name='+client.name,
    //         '=password='+client.password,
    //         '=service=pppoe',
    //         '=profile='+client.profile,
    //     ])
    //     return data;
    // }
    // catch (err){
    //     console.log(err);
    // }


};

const removeMikrotikApiUser = async (server, client) => {
    const conn = new RosApi({
        host: server.ip,
        user: server.name,
        password: server.password,
        keepalive: true
    });

    conn.connect().then(() => {
        console.log("connected")
        conn.write('/ppp/secret/print').then((data) => {

                conn.write('/ppp/secret/remove', [
                    '=.id='+pppoeUsers[0]['.id']
                ]).then((data) => {
                    console.log("removed")
                    return {id: data};
                }).catch((error) => {
                    console.log("added: " + error)
                    return {error: error};
                })

    }).catch((error) => {
        return {error: error};
    });
})};

module.exports = {
    addMikrotikApiUser,
    removeMikrotikApiUser
};
