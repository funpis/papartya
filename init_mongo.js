load("public/javascripts/sha256.js");

print('===== Init papartya database START =====');
conn = new Mongo();
db = conn.getDB("papartya");

print('===== Drop papartya database =====');
printjson(db.dropDatabase());

print('===== 1.  Add User =====');
// a1  a2 b1
//  |--+--|
//    peng
//  |--+--|
// a2    b2
var shaObj = new jsSHA('SHA-256', 'TEXT');
print('===== 1.1  Add User peng =====');
shaObj.update('peng');
db.User.save({
    'name': 'peng', 
    'password': shaObj.getHash('HEX'), 
    'email': 'liupengtuxio@gmail.com', 
    'appeal': 'peng test', 
    'party_hold_count': 1, 
    'party_join_count': 2, 
    'follow_up_ids': 3, 
    'follow_down_ids': 2, 
    'like_count': 2, 
    'dislike_count': 1, 
    'create_time': new Date("2018-03-01T12:00:00Z"), 
    'update_time': new Date("2018-03-02T12:00:00Z"), 
    'last_access_time': new Date("2018-03-03T12:00:00Z") 
});
var user_peng = db.User.findOne({'name': 'peng'});

print('===== 1.2  Add User a1 =====');
shaObj.update('a1');
db.User.save({
    'name': 'a1', 
    'password': shaObj.getHash('HEX'), 
    'email': 'liupengtuxio@gmail.com', 
    'appeal': 'a1 test', 
    'party_hold_count': 1, 
    'party_join_count': 0, 
    'follow_up_ids': 0, 
    'follow_down_ids': 1, 
    'like_count': 0, 
    'dislike_count': 0, 
    'create_time': new Date("2018-03-01T12:00:00Z"), 
    'update_time': new Date("2018-03-02T12:00:00Z"), 
    'last_access_time': new Date("2018-03-03T12:00:00Z") 
});
var user_a1 = db.User.findOne({'name': 'a1'});

print('===== 1.3  Add User a2 =====');
shaObj.update('a2');
db.User.save({
        'name': 'a2', 
        'password': shaObj.getHash('HEX'), 
        'email': 'liupengtuxio@gmail.com', 
        'appeal': 'a2 test', 
        'party_hold_count': 0, 
        'party_join_count': 0, 
        'follow_up_ids': 1, 
        'follow_down_ids': 1, 
        'like_count': 0, 
        'dislike_count': 1, 
        'create_time': new Date("2018-03-01T12:00:00Z"), 
        'update_time': new Date("2018-03-02T12:00:00Z"), 
        'last_access_time': new Date("2018-03-03T12:00:00Z") 
});
var user_a2 = db.User.findOne({'name': 'a2'});

print('===== 1.4  Add User b1 =====');
shaObj.update('b1');
db.User.save({
        'name': 'b1', 
        'password': shaObj.getHash('HEX'), 
        'email': 'liupengtuxio@gmail.com', 
        'appeal': 'b1 test', 
        'party_hold_count': 0, 
        'party_join_count': 1, 
        'follow_up_ids': 0, 
        'follow_down_ids': 1, 
        'like_count': 1, 
        'dislike_count': 0, 
        'create_time': new Date("2018-03-01T12:00:00Z"), 
        'update_time': new Date("2018-03-02T12:00:00Z"), 
        'last_access_time': new Date("2018-03-03T12:00:00Z") 
});
var user_b1 = db.User.findOne({'name': 'b1'});

print('===== 1.5  Add User b2 =====');
shaObj.update('b2');
db.User.save({
        'name': 'b2', 
        'password': shaObj.getHash('HEX'), 
        'email': 'liupengtuxio@gmail.com', 
        'appeal': 'b2 test', 
        'party_hold_count': 1, 
        'party_join_count': 1, 
        'follow_up_ids': 1, 
        'follow_down_ids': 0, 
        'like_count': 0, 
        'dislike_count': 0, 
        'create_time': new Date("2018-03-01T12:00:00Z"), 
        'update_time': new Date("2018-03-02T12:00:00Z"), 
        'last_access_time': new Date("2018-03-03T12:00:00Z") 
});
var user_b2 = db.User.findOne({'name': 'b2'});

print('===== 1.   Show User =====');
printjson(db.User.find().toArray());

print('===== 2.   Add UserPic =====');
print('===== 2.1  Add UserPic peng =====');
print('===== 2.1  Add UserPic a1 =====');
print('===== 2.1  Add UserPic a2 =====');
print('===== 2.1  Add UserPic b1 =====');
print('===== 2.1  Add UserPic b2 =====');

print('===== 2.   Show UserPic =====');
printjson(db.UserPic.find().toArray());

print('===== 3.   Add UserFollow =====');
// a1 <-- peng <-- b2
// a2 <-> peng
// a2 <-> b1 
print('===== 3.1  Add UserFollow peng =====');
db.UserFollow.save({
        'user_id': user_peng._id, 
        'follow_up_ids': [user_a1._id], 
        'follow_down_ids': [user_b2._id], 
        'friend_ids': [user_b2._id], 
});

print('===== 3.2  Add UserFollow a1 =====');
db.UserFollow.save({
        'user_id': user_a1._id, 
        'follow_down_ids': [user_peng._id], 
});

print('===== 3.3  Add UserFollow a2 =====');
db.UserFollow.save({
        'user_id': user_a2._id, 
        'friend_ids': [user_peng._id, user_b1._id], 
});

print('===== 3.4  Add UserFollow b1 =====');
db.UserFollow.save({
        'user_id': user_a1._id, 
        'friend_ids': [user_a2._id], 
});

print('===== 3.5  Add UserFollow b2 =====');
db.UserFollow.save({
        'user_id': user_b2._id, 
        'follow_up_ids': [user_peng._id], 
});

print('===== 3.   Show UserFollow =====');
printjson(db.UserFollow.find().toArray());

print('===== 4.   Add Group =====');
// peng + a2
// a2 + peng, b1
print('===== 4.1  Add Group peng =====');
db.Group.save({
        'name': 'peng\'s group1', 
        'owner_id': [user_peng._id],
        'member_ids': [user_a2._id],
});

print('===== 4.1  Add Group a2 =====');
db.Group.save({
        'name': 'a2\'s group1', 
        'owner_id': [user_a2._id],
        'member_ids': [user_peng._id, user_b1._id],
});

print('===== 4.   Show Group =====');
printjson(db.Group.find().toArray());

print('===== 5.   Add Party =====');
print('===== 5.   Show Party =====');

print('===== 6.   Add UserLike =====');
print('===== 6.1  Add UserLike peng =====');
print('===== 6.2  Add UserLike a1 =====');
print('===== 6.3  Add UserLike a2 =====');
print('===== 6.4  Add UserLike b1 =====');
print('===== 6.5  Add UserLike b2 =====');

print('===== 6.   Show UserLike =====');
printjson(db.UserLike.find().toArray());

print('===== Init papartya database END =====');
