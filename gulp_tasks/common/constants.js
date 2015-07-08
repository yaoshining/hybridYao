/**
 * Created by tongda on 15/7/2.
 */
module.exports = function(){
    var clientFolder = 'www';
    var constants = {
        clientFolder: clientFolder,
        style: {
            watchFolder: ['./scss/{,*/}*.{scss,sass}'],
            dest: './'+clientFolder+'/css',
            sass: {
                src: ['./scss/{,*/}*.{scss,sass}']
            }
        },
        serve: {
            host: 'localhost', //'0.0.0.0',
            port: 5000,
            open: true,
            browser: ['google chrome'], // ['google chrome', 'firefox'],
            localtunnel: false, // true, false or 'famousapp'
            ghostMode: {
                clicks: false,
                forms: false,
                scroll: false
            }
        }
    };
    return constants;
};