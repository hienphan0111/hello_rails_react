class MessageController < ApplicationController
    def message
        num_rand = rand(1..5)
        @message = Message.find(num_rand)
        render json: @message
    end
end
