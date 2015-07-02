/**
 * Created by tongda on 15/7/2.
 */
module.exports = function(){
    var clientFolder = 'www';
    var constants = {
        style: {
            dest: clientFolder+'/css',
            sass: {
                src: ['./scss/{,*/}*.{scss,sass}']
            }
        }
    };
    return constants;
};