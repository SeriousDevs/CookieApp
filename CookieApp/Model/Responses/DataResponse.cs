namespace CookieApp.Model.Responses;

public class DataResponse<T>
    where T : class
{
    public IEnumerable<T> Data { get; set; } = null!;
}
