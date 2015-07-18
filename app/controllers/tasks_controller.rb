class TasksController < ApplicationController
  def index
    respond_to do |format|
      format.html
    end
  end

  def new
    respond_to do |format|
      format.html
    end
  end

  def create
    task = Task.new(task_params)
    respond_to do |format|
      if task.save
        format.html { redirect_to tasks_path }
        format.json { render json: task, status: :created }
      else
        format.html { render action: 'new' }
        format.json { render json: task.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def task_params
      params.require(:task).permit(:title, :description);
    end
end
