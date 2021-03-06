/**
 * Colette's Discord class.
 */
class ColetteDiscordClient extends MaidenDiscordClient {
    
    /**
     * === Class constructor ===
     */
    constructor(settings) {
        
        // Call the constructor of the Discord Client parent Class.
        super(settings);
        
        // Customize her welcome message.
        this.welcome = `Jack in! Colette! Execute! :yum:\nWoo :smile:`;
        
        // Event: When Colette connects to Discord and is ready.
        this.on('ready', () => {
            
            // Logs connection event in console.
            console.log("\nJack in! Colette! Execute! xD");
            
        });
        
    }
    
}

module.exports = ColetteDiscordClient;
