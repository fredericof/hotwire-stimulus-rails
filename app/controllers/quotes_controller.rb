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

  def search_index
    @quotes = Quote.search(params)
  end

  def slider_index
  end
end
