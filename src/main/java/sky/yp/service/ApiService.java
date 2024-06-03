package sky.yp.service;

import org.springframework.web.client.RestTemplate;

public class ApiService {
    private final RestTemplate restTemplate;

    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getDataFromApi() {
        String apiLink = "apis.data.go.kr/B551011/KorService1/areaBasedList1";
        int numOfRows = 10;
        int pageNo = 1;
        String MobileOS = "ETC";
        String MobileApp = "YourPlanner";
        String serviceKey = "5V%2BytDDcz11Mfxc3tREUmoX6wOvDmA3oIaBkQfhB%2Bo%2B4vBWem3h6eQhKVvJuiJvpVonGtnuRqU6A83YSSBAh8A%3D%3D";
        String _type = "json";
        String listYN = "Y";
        String arrange = "A";
        String contentTypeId = "39";
        String areaCode = "4";
        String sigunguCode = "4";
        String cat1 = "A05";
        String cat2 = "N";
        String cat3 = "Y";


        String url = apiLink +
                "?numOfRows=" + numOfRows +
                "&pageNo=" + pageNo +
                "&MobileOS=" + MobileOS +
                "&MobileApp=" + MobileApp +
                "&serviceKey=" + serviceKey +
                "&_type=" + _type +
                "&listYN=" + listYN +
                "&arrange=" + arrange +
                "&contentTypeId=" + contentTypeId +
                "&areaCode=" + areaCode +
                "&sigunguCode=" + sigunguCode +
                "&cat1=" + cat1 +
                "&cat2=" + cat2 +
                "&cat3=" + cat3;

        return restTemplate.getForObject(url, String.class);
    }
}
