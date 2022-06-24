class Logger {
    private static instance: Logger;

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger;

            console.log('Instancia criada');
        }

        return Logger.instance;
    }

    log(message: string): void {
        console.log(`Logging: ${message}`);
    }
}

Logger.getInstance().log('teste');
Logger.getInstance().log('teste');
Logger.getInstance().log('teste');