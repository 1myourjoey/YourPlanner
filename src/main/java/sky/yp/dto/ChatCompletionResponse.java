package sky.yp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatCompletionResponse {

  private  List<Choice> choices;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
  public static class Choice{
      private ChatMessage message;
  }
}
