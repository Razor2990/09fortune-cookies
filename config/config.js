// Exportando objeto configurador
module.exports = {
    "IP": process.env.IP || '127.0.0.1',
    "PORT": process.env.PORT || 3030,
    "colorTheme": {
        'data': 'cyan',
        'info': 'rainbow',
        'error': 'red'
    }
};
