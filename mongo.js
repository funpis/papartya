var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    appeal: {type: String},
    party_hold_count: {type: Number, default: 0},
    party_join_count: {type: Number, default: 0},
    follow_up_ids: [String],
    follow_up_count: {type: Number, default: 0},
    follow_down_ids: [String],
    follow_down_count: {type: Number, default: 0},
    like_count: {type: Number, default: 0},
    dislike_count: {type: Number, default: 0},
    party_join_count: {type: Number, default: 0},
    create_time: {type: Date, dafault: Date.now},
    update_time: {type: Date, dafault: Date.now},
    last_access_time: {type: Date, dafault: Date.now},
});

var UserLike = new Schema({
    user_id: {type: String, required: true},
    party_id: {type: String, required: true},
    voter_id: {type: String, required: true},
    like: {type: Boolean, default: true},
});

var Group = new Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String},
    owner_id: {type: String, required: true},
    member_ids: [String],
    create_time: {type: Date, dafault: Date.now},
    update_time: {type: Date, dafault: Date.now},
});

var Party = new Schema({
    party_id: {type: String, required: true, unique: true},
    open: {type: Boolean, default: true},
    title: {type: String, required: true},
    manager_ids: [String],
    publisher_id: {type: String, required: true},
    publish_time: {type: Date, dafault: Date.now},
    invite_group_ids: [String],
    invite_user_ids: [String],
    vote_expire_time: {type: Date},
    topic_content: {type: String},
    like_count: {type: Number, default: 0},
    check_count: {type: Number, default: 0},
    comment_count: {type: Number, default: 0},
    click_count: {type: Number, default: 0},
    block_date: {type: Date},
    delete_date: {type: Date},
});

var PartyStats = new Schema({
    party_id: {type: String, required: true},
    user_id: {type: String, required: true},
    like: {type: Boolean},
    like_time: {type: Date},
    check: {type: Boolean},
    check_time: {type: Date},
    comment: {type: Boolean},
    comment_time: {type: Date},
    click: {type: Boolean},
    click_time: {type: Date},
});

var JoinerStatus = new Schema({
    party_id: {type: String, required: true},
    joiner_id: {type: String, required: true},
    inviter_id: {type: String, required: true},
    //0:invited, 1:applied, 2:accepted, 3:recommended, 4:canceled, 5:rejected
    status: {type: Number, required: true}, 
});

var PartyPoll = new Schema({
    party_id: {type: String, required: true},
    date: [{
        option_date: Date,
        option_date_id: Number,
        ticket: Number
    }],
    date_final: {type: Date},
    place: [{
        option_place: String,
        option_place_id: Number,
        ticket: Number
    }],
    place_final: {type: String},
});

var PollTicket = new Schema({
    party_id: {type: String, required:true},
    voter_id: {type: String, required: true},
    option_id: {type: Number, required:true},
    vote_time: {type: Date, dafault: Date.now},
});

var PartyOption = new Schema({
    party_id: {type: String, required: true},
    item: [{
        option_item: String,
        option_item_id: Number,
        number: Number
    }],
    companion: [{
        option_companion: String,
        option_companion_id: Number,
        number_man: Number,
        number_woman: Number,
        number_kid: Number,
        number_pet: Number,
    }],
});

var OptionTicket = new Schema({
    party_id: {type: String, required: true},
    voter_id: {type: String, required: true},
    option_id: {type: Number, required:true},
    vote_number: {type: Number, required: true},
    vote_time: {type: Date, dafault: Date.now},
});

var PartyComment = new Schema({
    party_id: {type: String, required: true},
    poster_id: {type: String, required: true},
    text: {type: String, required: true},
    pic: {type: String, required: true},
    comment_id: {type: String, required: true},
    parent_comment_id: {type: String},
    publisher_id: {type: String, required: true},
    publish_time: {type: Date, dafault: Date.now},
    reply_count: {type: Number, default: 0},
    like_count: {type: Number, default: 0},
    block_date: {type: Date},
    delete_date: {type: Date},
});

var CommentLike = new Schema({
    comment_id: {type: String, required: true},
    like_id: {type: String, required: true},
    like_time: {type: Date, dafault: Date.now},
});

//Account.plugin(passportLocalMongoose);

module.exports = {
  User: mongoose.model('User', User),
  UserLike: mongoose.model('UserLike', UserLike),
  Group: mongoose.model('Group', Group),
  Party: mongoose.model('Party', Party),
  PartyStats: mongoose.model('PartyStats', PartyStats),
  JoinerStatus: mongoose.model('JoinerStatus', JoinerStatus),
  PartyPoll: mongoose.model('PartyPoll', PartyPoll),
  PollTicket: mongoose.model('PollTicket', PollTicket),
  PartyOption: mongoose.model('PartyOption', PartyOption),
  OptionTicket: mongoose.model('OptionTicket', OptionTicket),
  PartyComment: mongoose.model('PartyComment', PartyComment),
  CommentLike: mongoose.model('CommentLike', CommentLike),
}
