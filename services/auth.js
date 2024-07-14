const sessionIdToUserMap = new Map();

function setAdmin (id, admin){
    sessionIdToUserMap.set(id, admin);
}

function getAdmin(id){
    return sessionIdToUserMap.get(id);
}



function checkSignupData(req, res) {
    const body = req.body;

    const password = body.password;
    const password2 = body.repassword;

    if (password !== password2) {
        return false;
    }
    else if (body.accessKey !== accessKey) {
        return false;
    }

    return true;
}

module.exports = {setAdmin, getAdmin, checkSignupData};