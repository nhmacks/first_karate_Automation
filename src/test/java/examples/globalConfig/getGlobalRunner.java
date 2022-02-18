package examples.globalConfig;

import com.intuit.karate.junit5.Karate;

public class getGlobalRunner {
    @Karate.Test
    public Karate runtest(){
        return Karate.run("getGlobalConfig").relativeTo(getClass());
    }

}
