require "test_helper"

class GetsdeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get getsde_index_url
    assert_response :success
  end
end
