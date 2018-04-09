load("public/javascripts/sha256.js");

print('===== Init papartya database START =====');
conn = new Mongo();
db = conn.getDB("papartya");

print('===== Drop papartya database =====');
printjson(db.dropDatabase());

print('===== 1. Add user =====');
var shaObj = new jsSHA('SHA-256', 'TEXT');
shaObj.update('peng');
var user_peng = {
        'name': 'peng', 
        'password': shaObj.getHash('HEX'), 
        'email': 'liupengtuxio@gmail.com', 
        'appeal': 'peng test', 
        'party_hold_count': 1, 
        'party_join_count': 0, 
        'follow_up_ids': 0, 
        'follow_down_ids': 0, 
        'like_count': 0, 
        'dislike_count': 0, 
        'create_time': new Date("2018-03-01T12:00:00Z"), 
        'update_time': new Date("2018-03-02T12:00:00Z"), 
        'last_access_time': new Date("2018-03-03T12:00:00Z") 
};
printjson(db.User.save(user_peng));
print('===== 2. Show user =====');
printjson(db.User.find().toArray());

print('===== Init papartya database END =====');
