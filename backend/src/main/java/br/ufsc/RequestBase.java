package br.ufsc;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class RequestBase {

	URL url = new URL("http://example.com");
	HttpURLConnection con = (HttpURLConnection) url.openConnection();

	public RequestBase() throws IOException {
	}
}
