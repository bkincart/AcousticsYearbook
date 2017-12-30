RSpec.describe Industry, type: :model do
  it { should have_valid(:name).when('Accounting', 'Software Development') }
  it { should_not have_valid(:name).when('', nil) }
end
