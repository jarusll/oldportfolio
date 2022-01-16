import graymatter from 'gray-matter';

String.prototype.objectify = function(){
    return graymatter(this);
};