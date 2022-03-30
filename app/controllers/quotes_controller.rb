class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
  end

  def new
    @quote = Quote.new(name: "Frederico")
  end

  def edit
    @quote = Quote.find(params[:id])
  end
end
