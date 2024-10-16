package com.tecnocampus.LS2.protube_back;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest({
        "pro_tube.store.dir=c:",
        "pro_tube.load_initial_data=false"
})
class ProtubeBackApplicationTests {

    @Test
    void shouldStartApp() {

        Double[] expected = new Double[]{2.0};

        Assert.assertArrayEquals(expected, new Double[]{2.0});
    }

}
