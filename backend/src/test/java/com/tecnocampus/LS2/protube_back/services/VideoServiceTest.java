package com.tecnocampus.LS2.protube_back.services;

<<<<<<< Updated upstream
=======
import com.tecnocampus.LS2.protube_back.repositories.IVideoFileRepository;
import org.junit.jupiter.api.Disabled;
>>>>>>> Stashed changes
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class VideoServiceTest {

    VideoService videoService = new VideoService();

<<<<<<< Updated upstream

=======
    @Disabled
>>>>>>> Stashed changes
    @Test
    void shouldGoToFolderVideos() {
        assertEquals(List.of("video1", "video2"), videoService.getVideos());
    }

}