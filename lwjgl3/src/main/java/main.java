import com.badlogic.gdx.ApplicationListener;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.audio.Music;
import com.badlogic.gdx.audio.Sound;
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.viewport.FitViewport;

public class main implements ApplicationListener {
    //assets
    Texture backgroundTexture;
    Texture dropTexture;
    Texture bucketTexture;
    Sound dropSound;
    Music music;

    SpriteBatch spriteBatch; //combines all drawing calls (separate textures) into one to not kill the gpu
    FitViewport viewPort; //window size and zoom
    //define vars
    @Override
    public void create(){
        backgroundTexture = new Texture("background.png");
        dropTexture = new Texture("drop.png");
        bucketTexture = new Texture("bucket.png");

        dropSound = Gdx.audio.newSound(Gdx.files.internal("drop.mp3"));
        music = Gdx.audio.newMusic(Gdx.files.internal("music.mp3"));

        spriteBatch = new SpriteBatch();
        viewPort = new FitViewport(8,5);
    }

    public void render(){
        input();
        logic();
        draw();
    }

    private void input(){

    }
    private void logic(){

    }
    //draws every frame
    private void draw(){
        ScreenUtils.clear(Color.BLACK);
        viewPort.apply();
        spriteBatch.setProjectionMatrix(viewPort.getCamera().combined); //put images in teh right place
        spriteBatch.begin();
        //draw things here
        spriteBatch.draw(bucketTexture, 0,0,1,1);
        spriteBatch.end();
    }
}
