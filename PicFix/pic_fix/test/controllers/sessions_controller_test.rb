require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get name" do
    get sessions_name_url
    assert_response :success
  end

  test "should get email" do
    get sessions_email_url
    assert_response :success
  end

end
