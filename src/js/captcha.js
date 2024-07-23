function captcha(){

        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let size = 6;
        let captcha = '';

        for( let i = 0; i < size ; i++ ){
            let randomTxt =  Math.floor( Math.random() * chars.length );
            captcha += chars.charAt(randomTxt) 
        }

        return captcha

}

export default captcha;